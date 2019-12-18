import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const styles = theme => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
});

const options = {
  overrides: {
    h1: { component: props => <Typography gutterBottom variant="h4" {...props} /> },
    h2: { component: props => <Typography gutterBottom variant="h6" {...props} /> },
    h3: { component: props => <Typography gutterBottom variant="subtitle1" {...props} /> },
    h4: { component: props => <Typography gutterBottom variant="caption" paragraph {...props} /> },
    p: { component: props => <Typography paragraph {...props} /> },
    a: { component: Link },
    li: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem}>
          <Typography component="span" {...props} />
        </li>
      )),
    },
  },
};

function InnerMarkdown(props) {
  return <ReactMarkdown options={options} {...props} transformImageUri={uri => {
    uri = uri.slice(1, -1)
    return uri
  }} />;
}

class Markdown extends Component {
  constructor(props) {
    super(props)

    this.state = { md: null }
  }

  async componentDidMount() {
    const response = await fetch(this.props.md);
    const text = await response.text();
    this.setState({ md: text });
  }

  render() {
    return (
      <InnerMarkdown>{this.state.md}</InnerMarkdown>
    )
  }
}

export default Markdown;
