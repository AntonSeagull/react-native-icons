

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrFormSearch = (props: IconProps) => {

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
          <Path d="M13.8,13.8 L18,18 L13.8,13.8 Z M10.5,15 C12.9852814,15 15,12.9852814 15,10.5 C15,8.01471863 12.9852814,6 10.5,6 C8.01471863,6 6,8.01471863 6,10.5 C6,12.9852814 8.01471863,15 10.5,15 Z" fill="none" />
        </G>
      </Svg>
    );
  }

