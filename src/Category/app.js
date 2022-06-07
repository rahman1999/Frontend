import React from 'react';
import View from './view';
import axios from '../Interceptor/axios';
import { connect } from 'react-redux'
import { fetchData } from '../Action/index'

class App extends React.Component
{

    // constructor()
    // {
    //     super();
    //     this.state={
    //         collection:'',
    //         collection1:'',
    //         collection2:'',
    //         category:'',
    //         category1:'',
    //         category2:''
    //         // pagelimit:'',
    //         // pgnum:0,
    //         // pagenumber:'',
            
    //     }

    // }
    componentDidMount() {
        this.props.onFetchData()
        console.log(this.props.onFetchData())
      }
        
        //     getdata(){
        // axios.get('/category/relation').then(res=>{
        //     console.log("category",res.data)
        //     this.setState({
        //         collection:res.data.result[0].categoryid,
        //         collection1:res.data.result[1].categoryid,
        //         collection2:res.data.result[2].categoryid,
        //         category:res.data.result[0].category_name,
        //         category1:res.data.result[1].category_name,
        //         category2:res.data.result[2].category_name
        //         // pagelimit:res.data.totalpages,
        //         // pgnum:this.state.pagenumber

        //     })
        
        // })
        //     } 

            render(){
                return(
                    <><h1>eSports</h1><hr></hr>
                                <View getdata={this.props.data} 
                                 getdata1={this.props.data1}
                                 getdata2={this.props.data2}
                                  cate={this.props.category} 
                                cate1={this.props.category1}
                                 cate2={this.props.category2}
                                 />
                            </>
                )
            }
}
const mapStatetoProps = (state) => {
    console.log('call',state)
  return { data: state.product,category:state.category,
    data1: state.product1,category1:state.category1,
    data2: state.product2,category2:state.category2, 
    error: state.error }
}

const mapDispatchprops = (dispatch) => {
    console.log('call',dispatch)
  return { onFetchData: () => dispatch(fetchData()) }
}


export default connect(mapStatetoProps, mapDispatchprops)(App);