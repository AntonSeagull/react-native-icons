

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgIfDesign = (props: IconProps) => {

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
          <Path  d="M10 5H14V19H10V5Z" fill="currentColor" />
          <Path  d="M5 19V10H9V19H5Z" fill="currentColor" />
          <Path  d="M7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5Z" fill="currentColor" />
          <Path  d="M15 5H19V9H15V5Z" fill="currentColor" />
          <Path  d="M19 10H15V14H19V10Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

