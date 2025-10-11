

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgTemplate = (props: IconProps) => {

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
          <Path d="M3 3V9H21V3H3ZM19 5H5V7H19V5Z" fill="currentColor" />
          <Path d="M3 11V21H11V11H3ZM9 13H5V19H9V13Z" fill="currentColor" />
          <Path d="M21 11H13V13H21V11Z" fill="currentColor" />
          <Path d="M13 15H21V17H13V15Z" fill="currentColor" />
          <Path d="M21 19H13V21H21V19Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

