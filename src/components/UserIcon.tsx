/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import user from './../zondicons/user.svg';
const UserIcon = () => (
	<img
		src={user}
		alt="User"
		width="12px"
		css={css`
			width: 12px;
			opacity: 0.6;
		`}
	/>
);
export default UserIcon;
