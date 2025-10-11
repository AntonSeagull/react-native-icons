

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiTriggerHurt = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M254.25 121.03A60 60 0 0 0 196 181a60 60 0 0 0 120 0 60 60 0 0 0-61.75-59.97zM136 271l-60 60H46c-15 0-30 15-30 30v30h480v-30c0-15-15-30-30-30h-30l-60-60-60 60-60-60-60 60-60-60z" />
        </G>
      </Svg>
    );
  }

