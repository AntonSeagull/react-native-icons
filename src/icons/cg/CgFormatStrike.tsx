

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgFormatStrike = (props: IconProps) => {

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
          <Path  d="M13 7H17V5H7V7H11V10H13V7Z" fill="currentColor" />
          <Path  d="M11 19V14H13V19H11Z" fill="currentColor" />
          <Path  d="M5 13H19V11H5V13Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

