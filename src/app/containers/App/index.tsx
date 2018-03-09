import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getCity } from './duck';
import Select from 'react-select';
import { IStore } from 'src/core/reducers/interfaces';

const mapStateToProps = (store: IStore) => ({
    app: store.app
});

const mapDispatchToProps = (dispatch: Dispatch<IStore>) =>
    bindActionCreators(
        {
            getCity
        },
        dispatch
    );

class App extends React.Component<any, any> {
    state = {
        city: ''
    };

    handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        this.setState({
            city: value
        });
    };

    getCity = () => {
        const { city } = this.state;
        this.props.getCity(city);
    };

    render() {
        const { app } = this.props;
        console.log(app);
        return (
            <div>
                <input type="text" name="name" onChange={this.handleChange} />
                <Select
                    name="country"
                />
                <button onClick={this.getCity}>города</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
