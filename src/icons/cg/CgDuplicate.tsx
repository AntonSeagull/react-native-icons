

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgDuplicate = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M19 5H7V3H21V17H19V5Z" fill="currentColor" />
          <Path d="M9 13V11H11V13H13V15H11V17H9V15H7V13H9Z" fill="currentColor" />
          <Path d="M3 7H17V21H3V7ZM5 9H15V19H5V9Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

