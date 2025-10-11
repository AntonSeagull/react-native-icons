

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RxAllSides = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 15 15"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 7.5, 7.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M7.5 0.75L9.75 3H5.25L7.5 0.75ZM7.5 14.25L9.75 12H5.25L7.5 14.25ZM3 5.25L0.75 7.5L3 9.75V5.25ZM14.25 7.5L12 5.25V9.75L14.25 7.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

