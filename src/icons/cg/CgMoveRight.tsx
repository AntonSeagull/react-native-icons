

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgMoveRight = (props: IconProps) => {

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
          <Path d="M5 17V15H13V17H5Z" fill="currentColor" />
          <Path d="M5 9V7H13V9H5Z" fill="currentColor" />
          <Path d="M5 12.9999V10.9999H14.9999V7.96454L19.071 11.9644L14.9999 15.9644V12.9999H5Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

