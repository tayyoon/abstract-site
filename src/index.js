class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        const nameCheck = this.findBoardByName(board.name);
        if (nameCheck) {
            throw '';
        }
        board.postCheck = true;
        this.boards.push(board);
        // console.log(board);
    }

    findBoardByName(name) {
        for (let i = 0; i < this.boards.length; i++) {
            if (this.boards[i].name === name) {
                return this.boards[i];
            }
        }
    }
}

class Board {
    constructor(name) {
        if (name === '' || name === null) {
            throw '';
        }
        this.name = name;
        this.allArticles = [];
        this.postCheck = false;
    }

    publish(article) {
        if (!this.postCheck) {
            throw '';
        }

        if (
            article.subject === null ||
            article.content === null ||
            article.author === null ||
            article.subject === '' ||
            article.content === '' ||
            article.author === ''
        ) {
            throw '';
        }

        article.id = `${this.name}-${Math.floor(Math.random() * 1000)}`;

        const date = new Date();
        article.createdDate = date.toISOString();
        this.allArticles.push(article);

        article.publishCheck = true;
    }

    getAllArticles() {
        // console.log(this.allArticles);
        return this.allArticles;
    }
}

class Article {
    constructor(props) {
        this.subject = props.subject;
        this.content = props.content;
        this.author = props.author;
        this.allComments = [];
    }

    reply(comment) {
        if (!this.publishCheck) {
            throw '';
        }

        if (comment.content === null || comment.author === null || comment.content === '' || comment.content === '') {
            throw '';
        }
        const date = new Date();
        comment.createdDate = date.toISOString();
        this.allComments.push(comment);
    }

    getAllComments() {
        return this.allComments;
    }
}

class Comment {
    constructor(props) {
        this.content = props.content;
        this.author = props.author;
    }
}
// const comment = new Comment({
//     content: null,
//     author: '',
// });
// console.log(comment);
// const comment1 = new Comment({
//     content: '댓글1111',
//     author: '강승현',
// });
// console.log(comment1);

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
