

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrBaby = (props: IconProps) => {

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
          <Path d="M10,15 L14,15 C14,15 13,16.5 12,16.5 C11,16.5 10,15 10,15 Z M12,6 C12.5522847,6 13,5.55228475 13,5 C13,4.44771525 12.5522847,4 12,4 C11.4477153,4 11,4.44771525 11,5 C11,5.55228475 11.4477153,6 12,6 Z M18,12 L14,9 M14,15 L17,17.5 L14.5,20 M6,12 L10,9 M10,15 L7.5,17.75 L10,20 M10,9 L14,9 L14,12 L10,12 L10,9 Z" fill="none" />
        </G>
      </Svg>
    );
  }

