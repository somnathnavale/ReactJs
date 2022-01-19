import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <header className="header" >
            <h1>{props.title}</h1>
        </header>
    )
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
};

Header.defaultProps={
    title:"set title here"
};

export default Header;

