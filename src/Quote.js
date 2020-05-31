import React from 'react';

class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            quote: '',
            author: ''
        };
        this.newQuoteClickHandler.bind(this);
    }

    componentDidMount() {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then(response => response.json())
            .then(quotes => {
                let quote_list = quotes.quotes;
                let index = Math.floor(Math.random() * quote_list.length);
                this.setState({
                    quotes: quote_list,
                    quote: quote_list[index].quote,
                    author: quote_list[index].author
                });
            })
    }

    newQuoteClickHandler() {
        let quote_list = this.state.quotes.slice();
        let index = Math.floor(Math.random() * quote_list.length);
        this.setState({
            quotes: quote_list,
            quote: quote_list[index].quote,
            author: quote_list[index].author
        });
    }

    render() {
        console.log(this.state.quotes);
        console.log(this.state.quote);
        return (
            <div id="quote-box">
                <div className="quote-info">
                    <p id="text">"{this.state.quote}"</p>
                    <p id="author"> - {this.state.author}</p>
                    <button class="button" id="new-quote" onClick={() => this.newQuoteClickHandler()}>New Quote</button>
                    <a class="button" id="tweet-quote" target="_blank" rel="noopener noreferrer" href={'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + this.state.quote + '" ' + this.state.author)}>Tweet Quote</a>
                </div>
            </div>
        )
    }
}

export default Quote;