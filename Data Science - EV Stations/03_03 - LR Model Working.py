#!/usr/bin/env python
# coding: utf-8

# # Chapter 3 - Regression Models 
# ## Segment 3 - Logistic regression

# In[19]:


import numpy as np
import pandas as pd
import seaborn as sb
import matplotlib.pyplot as plt
import sklearn

from pandas import Series, DataFrame
from pylab import rcParams
from sklearn import preprocessing


# In[20]:


from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.model_selection import cross_val_predict

from sklearn import metrics
from sklearn.metrics import classification_report
from sklearn.metrics import confusion_matrix
from sklearn.metrics import precision_score, recall_score


# In[21]:


get_ipython().run_line_magic('matplotlib', 'inline')
rcParams['figure.figsize'] = 5, 4
sb.set_style('whitegrid')


# ## Logistic regression on the titanic dataset

# In[22]:


address = 'C:/Users/west5/OneDrive/Education/Masters - Information Technology (Data Science)/SIT764 - Team Project A/Advance Your Python Skills for Data Science/Part 2 - Python for Data Science Essential Training/Data/titanic-training-data.csv'
titanic_training = pd.read_csv(address)
titanic_training.columns = ['PassengerId', 'Survived', 'Pclass', 'Name', 'Sex', 'Age', 'SibSp', 'Parch', 'Ticket', 'Fare', 'Cabin', 'Embarked']
print(titanic_training.head())


# In[23]:


print(titanic_training.info())


# ##### VARIABLE DESCRIPTIONS
# 
# Survived - Survival (0 = No; 1 = Yes)<br>
# Pclass - Passenger Class (1 = 1st; 2 = 2nd; 3 = 3rd)<br>
# Name - Name<br>
# Sex - Sex<br>
# Age - Age<br>
# SibSp - Number of Siblings/Spouses Aboard<br>
# Parch - Number of Parents/Children Aboard<br>
# Ticket - Ticket Number<br>
# Fare - Passenger Fare (British pound)<br>
# Cabin - Cabin<br>
# Embarked - Port of Embarkation (C = Cherbourg, France; Q = Queenstown, UK; S = Southampton - Cobh, Ireland)

# ### Checking that your target variable is binary

# In[24]:


sb.countplot(x='Survived', data=titanic_training, palette='hls')


# ### Checking for missing values

# In[25]:


titanic_training.isnull().sum()


# In[26]:


titanic_training.describe()


# ### Taking care of missing values
# ##### Dropping missing values
# So let's just go ahead and drop all the variables that aren't relevant for predicting survival. We should at least keep the following:
# - Survived - This variable is obviously relevant.
# - Pclass - Does a passenger's class on the boat affect their survivability?
# - Sex - Could a passenger's gender impact their survival rate?
# - Age - Does a person's age impact their survival rate?
# - SibSp - Does the number of relatives on the boat (that are siblings or a spouse) affect a person survivability? Probability
# - Parch - Does the number of relatives on the boat (that are children or parents) affect a person survivability? Probability
# - Fare - Does the fare a person paid effect his survivability? Maybe - let's keep it.
# - Embarked - Does a person's point of embarkation matter? It depends on how the boat was filled... Let's keep it.
# 
# What about a person's name, ticket number, and passenger ID number? They're irrelavant for predicting survivability. And as you recall, the cabin variable is almost all missing values, so we can just drop all of these.

# In[27]:


titanic_data = titanic_training.drop(['Name', 'Ticket', 'Cabin'], axis = 1)
titanic_data.head()


# ### Imputing missing values

# In[28]:


sb.boxplot(x='Parch', y = 'Age', data=titanic_data, palette = 'hls')


# In[29]:


Parch_groups = titanic_data.groupby(titanic_data['Parch'])
Parch_groups.mean()


# In[32]:


def age_approx(cols):
    Age = cols[0]
    Parch = cols[1]
    
    if pd.isnull(Age):
        if Parch  == 0:
            return 32
        elif Parch == 1:
            return 24
        elif Parch == 2:
            return 17
        elif Parch == 3:
            return 33
        elif Parch == 4:
            return 45
        else: 
            return 30
    else:
        return Age
#         elif Parch == 5:
#             39
#         elif Parch == 6:
#             43
    


# In[33]:


titanic_data['Age']=titanic_data[['Age', 'Parch']].apply(age_approx, axis=1)
titanic_data.isnull().sum()
# titanic_data['Age']= titanic_data[['Age', 'Parch']].apply(age_approx, axis=1)
# titanic_data.isnull().sum()


# In[35]:


titanic_data.dropna(inplace=True)
titanic_data.reset_index(inplace=True, drop=True)
print(titanic_data.info())


# ### Converting categorical variables to a dummy indicators

# In[36]:


from sklearn.preprocessing import LabelEncoder
label_encoder = LabelEncoder()

gender_cat = titanic_data['Sex']
gender_encoded = label_encoder.fit_transform(gender_cat)
gender_encoded[0:5]


# In[37]:


titanic_data.head()
#1 is male 
#0 is female


# In[38]:


gender_DF = pd.DataFrame(gender_encoded, columns=['male_gender'])
gender_DF.head()


# In[39]:


embarked_cat = titanic_data['Embarked']
embarked_encoded = label_encoder.fit_transform(embarked_cat)
embarked_encoded[0:100]


# In[44]:


from sklearn.preprocessing import OneHotEncoder
binary_encoder = OneHotEncoder(categories='auto')
embarked_1hot = binary_encoder.fit_transform(embarked_encoded.reshape(-1,1))
embarked_1hot_mat = embarked_1hot.toarray()
embarked_Df = pd.DataFrame(embarked_1hot_mat, columns = ['C', 'Q', 'S'])
embarked_Df.head()
# now we have a binary variable to represent where 
# people boarded the boat. 


# In[45]:


# Drop the original variables.
# sex and embarked since they are not needed anymore. 
# been replaced with the binary variables. 
titanic_data.drop(['Sex', 'Embarked'], axis=1, inplace=True)
titanic_data.head()


# In[47]:


# add dummy variables to the titanic set. 
titanic_dmy= pd.concat([titanic_data, gender_DF, embarked_Df], axis=1, verify_integrity=True).astype(float)
titanic_dmy[0:5]


# ### Checking for independence between features

# In[48]:


sb.heatmap(titanic_dmy.corr())


# In[50]:


titanic_dmy.drop(['Fare', 'Pclass'], axis=1, inplace=True)
titanic_dmy.head()


# ### Checking that your dataset size is sufficient

# In[52]:


titanic_dmy.info()
# rule of thumb you should have at least 50 records per predictive feature. 
# 6 predictors. Therefore we need 50*6 = 300 records in the dataset. 
# we have 889 so enough data to do a regression. 
# 6 predictors, 1 independent variable being survived. 


# In[55]:


X_train, X_test, y_train, y_test = train_test_split(titanic_dmy.drop(['Survived'], axis = 1),
                                                    titanic_dmy['Survived'], test_size = 0.2,
                                                    random_state=200)
# Dropping survived since it is the independent variable.
# leave the remaining 6 as predictors. 
# Then use survived as the independent variable. 
# Training/Test split of 20%/80%


# In[56]:


print(X_train.shape)
print(y_train.shape)


# In[57]:


X_train[0:5] # our training data. 


# ### Deploying and evaluating the model

# In[58]:


LogReg = LogisticRegression(solver='liblinear')
LogReg.fit(X_train, y_train)


# In[59]:


y_pred = LogReg.predict(X_test)


# ## Model Evaluation
# ### Classification report without cross-validation

# In[60]:


print(classification_report(y_test, y_pred))
# Precision and recall around 81% that is okay. 


# ### K-fold cross-validation & confusion matrices

# In[62]:


y_train_pred = cross_val_predict(LogReg, X_train, y_train, cv = 5)
confusion_matrix(y_train, y_train_pred)
# 377 and 180 are the correct predictions
# 91 and 63 are incorrect predictions


# In[63]:


precision_score(y_train, y_train_pred)
# 74% are accurate predictions. 


# ### Make a test prediction

# In[64]:


# Making a fictitious test. 
# create a fictitious and predict 
# and if they survived based on their 
# predictive features

titanic_dmy[863:864]


# In[67]:


# pass in all the predictors. 
# creating a test passenger and 
# predicting if they survived. 
test_passenger = np.array([866, 40, 0, 0, 0, 0, 0, 1]).reshape(1,-1)

print(LogReg.predict(test_passenger)) 
# predicting they survived as they are 1 which means survived (0 means died)
print(LogReg.predict_proba(test_passenger)) 
# 74% probability, this prediction is incorrect.This means the passenger survived.
# 26% probability the passenger died and this prediction is incorrect.


# In[ ]:





# In[ ]:




