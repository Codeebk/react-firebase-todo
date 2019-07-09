#React Fire To Dos App



###User Stories

1) Firebase: https://firebase.google.com/
2) React Router: https://reacttraining.com/react-router/web/guides/quick-start
3) Create React App: https://facebook.github.io/create-react-app/docs/getting-started

*Curious when you should use firebase? Check out the use cases from from popular users*
https://firebase.google.com/use-cases

*Useful tips/tricks:*
_You can shorten the `create-react-app` command to simply `cra` by putting this function in your bash profile:_

```cra(){
    'create-react-app' $1
}```

*Here are our user stories:*

1) As a user/visitor, I should be able to land on a page with the greeting "Welcome to React Firebase Todos"

2) As a user, I should be able see a menu that allows me to navigate to a dashboard screen

3) As a user, when clicking on "dashboard", I should be redirected to a login screen unless I'm authenticated using my google credentials

4) As a user, once authenticated by google and navigated to the dashboard, I should see a greeting banner and my profile photo from Google
indicating I'm on the dashboard.

5) As a user, once authenticated by google, I should see an option from nav that allows me to "logout" and be redirected away from the dashboard.

6) As a user, while navigated to the dashboard, I should see a form that allows me to add and persist todo items.

7) As a user, while navigated to the dashboard, I should see a list of my current todo items.

8) As a user, while navigated to the dashboard, I should see an option to delete an individual todo item.

9) As a user, while navigated to the dashboard, I should see an option to update an individual todo items from incomplete to complete.

10) As a user, while navigated to the dashboard, I should see my todo items sorted by incompleteness.
