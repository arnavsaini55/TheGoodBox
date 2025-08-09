import React, {useRef, useState} from 'react';
import {Pressable, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {scaleFontSize} from '../../assets/styles/scaling';
import { useSelector } from 'react-redux';
import { getTheme } from '../../assets/styles/theme';

import style from './style';

const Search = props => {
  const textInputRef = useRef(null);
  const [search, setSearch] = useState('');
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const theme = getTheme(isDarkMode);

  const handleFocus = () => {
    textInputRef.current.focus();
  };

  const handleSearch = searchValue => {
    setSearch(searchValue);
    props.onSearch(searchValue);
  };
  
  return (
    <Pressable 
      style={[
        style.searchInputContainer, 
        { backgroundColor: theme.secondaryBackground }
      ]} 
      onPress={handleFocus}
    >
      <FontAwesomeIcon 
        icon={faSearch}
        color={theme.primary}
        size={scaleFontSize(22)}
      />
      <TextInput
        ref={textInputRef}
        style={[
          style.searchInput, 
          { color: theme.textPrimary }
        ]}
        value={search}
        onChangeText={value => handleSearch(value)}
        placeholder='Search'
        placeholderTextColor={theme.textTertiary}
      />
    </Pressable>
  );
};

Search.defaultProps = {
  onSearch: () => {},
};

Search.propTypes = {
  onSearch: PropTypes.func,
};

export default Search;