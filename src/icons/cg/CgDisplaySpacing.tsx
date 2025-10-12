

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgDisplaySpacing = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M3 21V3H5V21H3Z" fill="currentColor" />
          <Path  d="M7 3H17V21H7V3ZM9 5V19H15V5H9Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
          <Path  d="M19 3V21H21V3H19Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

