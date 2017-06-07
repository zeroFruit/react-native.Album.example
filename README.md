# React-Native
### Flexbox
```justifyContent: 'flex-end', 'center', 'flex-start'```
1. push down text down to the bottom
2. center
3. appear very on the top

```alignItems: 'flex-end', 'center', 'flex-start'```
1. appear very on the left
2. center
3. appear very on the right

#### Multiple Items
```justifyContent: 'space-between'```
Make maximize and equal space between items.

```justifyContent: 'space-around'```
Difference between ```'space-between'``` is that it also make space before the first item and after the last item.

```flexDirection: 'column'```, ```flexDirection: 'row'```
place Component vertically or horizontally. Default to ```'column'```
#### Tricks for full width image 
```jsx
imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
```
```flex: 1``` means expand Component as much as possible.

#### Tricks for ScrollView
After change your view from ```View``` to ```ScrollView```, also add styles your root view ```{ flex: 1 }``` 


### Rules of State
* Definition of state: a plain javascript object used to record and respond to user-triggered events.
* When we need to update what a component shows, call 'this.setState'
* ```props``` are for communicating with Parent to Child Component. ```state``` on the other hand, for keeping Component internal record.

### Each list should have unique key
It is about performance concerns.

### Reusable Component for nice styling
```jsx
<Card>
	<CardSection>
		<Image />
		<Text />
	</CardSection>
</Card>
```
By making wrapper Component we can easily style the app.
Because in React Native, we can't use the benefit of saparate css files.
By passing ```props.children```, we can render nested Component.

### Make reusable Component by passing function as props
In the case of Button Component, by passing onClick function as props we can make that Button Component as reusable Component.