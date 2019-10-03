import React, { Component } from 'react';

class Form extends Component {
    state = { 
        category: ''
     }
    
    // Get category
    handle = (e) =>  {
        this.setState({
            category: e.target.value
        }, () => {
            // set the category to app state
            this.props.searchnews(this.state.category);
        }  );

    }


    render() {
        return (
            <div className="row buscador">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Search your news by Category</h2>
                        <div className="input-field col s12 m8 offset-m2"> 
                            <select onChange={this.handle}>
                                <option value="general">General</option>
                                <option value="business">Business</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="health">Health</option>
                                <option value="science">Science</option>
                                <option value="sports">Sports</option>
                                <option value="technology">Technology</option>
                            </select>
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default Form;