import React from 'react'
import ReactDOM from 'react-dom'
import Constants from '../common/constants'
import InfiniteScroll from 'react-infinite-scroller/dist/InfiniteScroll';
import Article from './Article';

export default class ArticlesContainer extends React.Component 
{
    constructor(props) 
    {
        super(props)
        this.countItem = 0;
        this.state = 
        {
            hasMoreItems: true,
            bloglist: Constants.bloglist[this.countItem],
        }
    }


    loadItems() 
    {
        if (this.countItem !== undefined) 
        {
            if (this.countItem > Constants.bloglist.length)
                this.setState({ hasMoreItems: false })
            else 
            {
                this.countItem = this.countItem + 1
                let bloglist = [...this.state.bloglist, ...Constants.bloglist[this.countItem]]
                this.setState({ hasMoreItems: true, bloglist })
            }
        }
    }

    render() 
    {
        let constructList = []
        this.state.bloglist.map(function (item, index) 
        {
            constructList.push(<Article key={index} data={item} />)
        })
        let items = <ul>{constructList}</ul>
        return (
            <div>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadItems.bind(this)}
                    hasMore={this.state.hasMoreItems}
                >
                    <div >
                        {items}
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}

