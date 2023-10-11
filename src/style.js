import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
container:{
  background:theme.palette.background.paper,
  padding: theme.spacing(8 , 0 , 6)

},
icon:{
marginRight:"20px"
},
buttons:{
marginTop:"40px"
},
cardContent:{
  flexGrow:1,
},
cardMedia:{
  paddingTop:"56.25%"
},
card:{
height:"100%",
display:"flex",
flexDirection:"column"
},
cardGrid:{
  padding:"20px 0"
}
,footer:{
  background:theme.palette.background.paper,
  padding:"50px 0"
}
}))
export default useStyles;