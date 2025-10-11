

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrFormSchedule = (props: IconProps) => {

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
          <Path d="M6,19 L18,19 L18,8 L6,8 L6,19 Z M8,15 L10,15 L8,15 Z M11,15 L16,15 L11,15 Z M15,8 L15,5 L15,8 Z M9,8 L9,5 L9,8 Z M6,11.5 L18,11.5 L6,11.5 Z" fill="none" />
        </G>
      </Svg>
    );
  }

