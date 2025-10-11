

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrBeacon = (props: IconProps) => {

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
          <Path  d="M12 12a3 3 0 100-6 3 3 0 000 6zm0 0v11M7.05 4.05A6.978 6.978 0 005 9c0 1.933.784 3.683 2.05 4.95m9.9 0A6.978 6.978 0 0019 9a6.978 6.978 0 00-2.05-4.95M4.222 1.222A10.966 10.966 0 001 9c0 3.037 1.231 5.787 3.222 7.778m15.556 0A10.966 10.966 0 0023 9c0-3.038-1.231-5.788-3.222-7.778" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

