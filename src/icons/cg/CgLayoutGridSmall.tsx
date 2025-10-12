

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgLayoutGridSmall = (props: IconProps) => {

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
          <Path  d="M7 7H9V9H7V7Z" fill="currentColor" />
          <Path  d="M11 7H13V9H11V7Z" fill="currentColor" />
          <Path  d="M17 7H15V9H17V7Z" fill="currentColor" />
          <Path  d="M7 11H9V13H7V11Z" fill="currentColor" />
          <Path  d="M13 11H11V13H13V11Z" fill="currentColor" />
          <Path  d="M15 11H17V13H15V11Z" fill="currentColor" />
          <Path  d="M9 15H7V17H9V15Z" fill="currentColor" />
          <Path  d="M11 15H13V17H11V15Z" fill="currentColor" />
          <Path  d="M17 15H15V17H17V15Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

