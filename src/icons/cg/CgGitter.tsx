

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgGitter = (props: IconProps) => {

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
          <Path d="M5 1.5H7V14.5H5V1.5Z" fill="currentColor" />
          <Path d="M9 4.5H11V22.5H9V4.5Z" fill="currentColor" />
          <Path d="M15 4.5H13V22.5H15V4.5Z" fill="currentColor" />
          <Path d="M17 4.5H19V14.5H17V4.5Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

