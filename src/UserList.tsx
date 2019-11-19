import React, { Component } from 'react';

import './App.css';
import InfiniteScroll from "react-infinite-scroller";
import axios from 'axios';
interface IState {
    items: number,
    hasMoreItems: boolean,
    users: any
}

const Dummy = () => (
    <div>
        Okay so long story short, I scoured the web to try to find an up to date version of an infinite scroll implementation that could work for my React Component without using the following unsupported/anti-pattern/discouraged /non-working things like:
        ReactDOM.findNode ()
        ComponentWillUpdate()
        document.getElementById(‘mehSomeId’) (works but not ideal)
        document.documentElement.scrollHeight (doesn’t get you the true scroll height of the child component)
        document.documentElement.scrollTop (doesn’t change in value despite onScroll event handler being triggered)
        Infinite Scroll Library from npm (Couldn’t get it to work on my child component)
        Thus, here’s my very basic, direct implementation of the Infinite Scroll that should work for any React Component using ES6.Okay so long story short, I scoured the web to try to find an up to date version of an infinite scroll implementation that could work for my React Component without using the following unsupported/anti-pattern/discouraged /non-working things like:
        ReactDOM.findNode ()
        ComponentWillUpdate()
        document.getElementById(‘mehSomeId’) (works but not ideal)
        document.documentElement.scrollHeight (doesn’t get you the true scroll height of the child component)
        document.documentElement.scrollTop (doesn’t change in value despite onScroll event handler being triggered)
        Infinite Scroll Library from npm (Couldn’t get it to work on my child component)
        Thus, here’s my very basic, direct implementation of the Infinite Scroll that should work for any React Component using ES6.




        Okay so long story short, I scoured the web to try to find an up to date version of an infinite scroll implementation that could work for my React Component without using the following unsupported/anti-pattern/discouraged /non-working things like:
        ReactDOM.findNode ()
        ComponentWillUpdate()
        document.getElementById(‘mehSomeId’) (works but not ideal)
        document.documentElement.scrollHeight (doesn’t get you the true scroll height of the child component)
        document.documentElement.scrollTop (doesn’t change in value despite onScroll event handler being triggered)
        Infinite Scroll Library from npm (Couldn’t get it to work on my child component)
        Thus, here’s my very basic, direct implementation of the Infinite Scroll that should work for any React Component using ES6.

        Okay so long story short, I scoured the web to try to find an up to date version of an infinite scroll implementation that could work for my React Component without using the following unsupported/anti-pattern/discouraged /non-working things like:
        ReactDOM.findNode ()
        ComponentWillUpdate()
        document.getElementById(‘mehSomeId’) (works but not ideal)
        document.documentElement.scrollHeight (doesn’t get you the true scroll height of the child component)
        document.documentElement.scrollTop (doesn’t change in value despite onScroll event handler being triggered)
        Infinite Scroll Library from npm (Couldn’t get it to work on my child component)
        Thus, here’s my very basic, direct implementation of the Infinite Scroll that should work for any React Component using ES6.Okay so long story short, I scoured the web to try to find an up to date version of an infinite scroll implementation that could work for my React Component without using the following unsupported/anti-pattern/discouraged /non-working things like:
        ReactDOM.findNode ()
        ComponentWillUpdate()
        document.getElementById(‘mehSomeId’) (works but not ideal)
        document.documentElement.scrollHeight (doesn’t get you the true scroll height of the child component)
        document.documentElement.scrollTop (doesn’t change in value despite onScroll event handler being triggered)
        Infinite Scroll Library from npm (Couldn’t get it to work on my child component)
        Thus, here’s my very basic, direct implementation of the Infinite Scroll that should work for any React Component using ES6.




        Okay so long story short, I scoured the web to try to find an up to date version of an infinite scroll implementation that could work for my React Component without using the following unsupported/anti-pattern/discouraged /non-working things like:
        ReactDOM.findNode ()
        ComponentWillUpdate()
        document.getElementById(‘mehSomeId’) (works but not ideal)
        document.documentElement.scrollHeight (doesn’t get you the true scroll height of the child component)
        document.documentElement.scrollTop (doesn’t change in value despite onScroll event handler being triggered)
        Infinite Scroll Library from npm (Couldn’t get it to work on my child component)
        Thus, here’s my very basic, direct implementation of the Infinite Scroll that should work for any React Component using ES6.
        Okay so long story short, I scoured the web to try to find an up to date version of an infinite scroll implementation that could work for my React Component without using the following unsupported/anti-pattern/discouraged /non-working things like:
        ReactDOM.findNode ()
        ComponentWillUpdate()
        document.getElementById(‘mehSomeId’) (works but not ideal)
        document.documentElement.scrollHeight (doesn’t get you the true scroll height of the child component)
        document.documentElement.scrollTop (doesn’t change in value despite onScroll event handler being triggered)
        Infinite Scroll Library from npm (Couldn’t get it to work on my child component)
        Thus, here’s my very basic, direct implementation of the Infinite Scroll that should work for any React Component using ES6.Okay so long story short, I scoured the web to try to find an up to date version of an infinite scroll implementation that could work for my React Component without using the following unsupported/anti-pattern/discouraged /non-working things like:
        ReactDOM.findNode ()
        ComponentWillUpdate()
        document.getElementById(‘mehSomeId’) (works but not ideal)
        document.documentElement.scrollHeight (doesn’t get you the true scroll height of the child component)
        document.documentElement.scrollTop (doesn’t change in value despite onScroll event handler being triggered)
        Infinite Scroll Library from npm (Couldn’t get it to work on my child component)
        Thus, here’s my very basic, direct implementation of the Infinite Scroll that should work for any React Component using ES6.




        Okay so long story short, I scoured the web to try to find an up to date version of an infinite scroll implementation that could work for my React Component without using the following unsupported/anti-pattern/discouraged /non-working things like:
        ReactDOM.findNode ()
        ComponentWillUpdate()
        document.getElementById(‘mehSomeId’) (works but not ideal)
        document.documentElement.scrollHeight (doesn’t get you the true scroll height of the child component)
        document.documentElement.scrollTop (doesn’t change in value despite onScroll event handler being triggered)
        Infinite Scroll Library from npm (Couldn’t get it to work on my child component)
        Thus, here’s my very basic, direct implementation of the Infinite Scroll that should work for any React Component using ES6.
</div>
)
class UserList extends Component<any, IState> {
    state = {
        items: 10,
        hasMoreItems: true,
        users: []

    };
    showUser = async (page: number) => {
        let url = 'https://reqres.in/api/users?per_page=2&page=';
        let resp = await axios({
            method: 'get',
            url: url + page
        });
        this.setState({ users: this.state.users.concat(resp.data.data) });
    }
    componentDidMount() {
        this.showUser(1);
    }

    showUsers() {
        return this.state.users.map((user: any, key: number) => {
            return <tr key={key}><td>{user.first_name}</td><td>{user.last_name}</td></tr>
        });
    }

    loadMore(page: number) {
        if (page > 7) {
            this.setState({ hasMoreItems: false })
        } else {
            setTimeout(this.showUser, 2000, page)
        }
    }

    render() {
        return (
            <div className="App">
                <Dummy />
                <table >
                    <InfiniteScroll
                        pageStart={1}
                        loadMore={this.loadMore.bind(this)}
                        hasMore={this.state.hasMoreItems}
                        loader={<tr key={1} className="loader"><td>Loading...</td></tr>}
                        element="tbody"
                        threshold={1}
                        useWindow={true}
                    >
                        {this.showUsers()}
                    </InfiniteScroll>
                </table>
            </div>
        );
    }
}


export default UserList;
