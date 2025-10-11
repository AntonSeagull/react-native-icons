

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiCrosshair = (props: IconProps) => {

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
          <Path  d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 17.931V17h-2v2.931A8.008 8.008 0 0 1 4.069 13H7v-2H4.069A8.008 8.008 0 0 1 11 4.069V7h2V4.069A8.007 8.007 0 0 1 19.931 11H17v2h2.931A8.008 8.008 0 0 1 13 19.931z" />
        </G>
      </Svg>
    );
  }

