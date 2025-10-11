

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgAlignLeft = (props: IconProps) => {

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
          <Path  d="M8 13H14V17H8V13Z" fill="currentColor" fillOpacity="0.5" />
          <Path  d="M6 6H4V18H6V6Z" fill="currentColor" />
          <Path  d="M20 7H8V11H20V7Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

