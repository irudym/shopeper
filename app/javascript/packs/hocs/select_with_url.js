import SelectContainer from '../containers/select/select_container';
import withUrl from './with_url';

const SelectWithUrl = url => (withUrl(SelectContainer, url));

export default SelectWithUrl;
