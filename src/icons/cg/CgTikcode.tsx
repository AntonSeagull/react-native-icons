

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgTikcode = (props: IconProps) => {

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
          <Path d="M9 5H5V9H9V5ZM3 3V11H11V3H3Z" fill="currentColor" />
          <Path d="M19 5H15V9H19V5ZM13 3V11H21V3H13Z" fill="currentColor" />
          <Path d="M9 15H5V19H9V15ZM3 13V21H11V13H3Z" fill="currentColor" />
          <Path d="M13 13H15V21H13V13Z" fill="currentColor" />
          <Path d="M16 13H18V21H16V13Z" fill="currentColor" />
          <Path d="M19 13H21V21H19V13Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

