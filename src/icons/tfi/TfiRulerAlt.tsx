

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiRulerAlt = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M12.036 0.015l-12.021 12.021 4.95 4.949 12.020-12.020-4.949-4.95zM1.429 12.036l0.696-0.696 1.414 1.414 0.707-0.707-1.414-1.414 0.719-0.719 0.707 0.707 0.707-0.707-0.707-0.707 0.707-0.707 1.414 1.414 0.707-0.707-1.414-1.414 0.696-0.696 0.707 0.707 0.707-0.707-0.707-0.707 0.707-0.707 1.414 1.414 0.707-0.707-1.414-1.414 0.718-0.718 0.707 0.707 0.707-0.707-0.707-0.707 0.707-0.707 1.415 1.414 0.707-0.707-1.415-1.414 0.708-0.708 3.535 3.536-10.606 10.606-3.536-3.535z" />
        </G>
      </Svg>
    );
  }

