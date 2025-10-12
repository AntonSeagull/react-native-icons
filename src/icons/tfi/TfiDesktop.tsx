

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiDesktop = (props: IconProps) => {

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
          <Path  d="M2 11h13v-8h-13v8zM3 4h11v6h-11v-6zM15.5 1h-14c-0.827 0-1.5 0.638-1.5 1.423v10.154c0 0.785 0.673 1.423 1.5 1.423h14c0.827 0 1.5-0.638 1.5-1.423v-10.154c0-0.785-0.673-1.423-1.5-1.423zM16 12.577c0 0.234-0.225 0.423-0.5 0.423h-14c-0.275 0-0.5-0.189-0.5-0.423v-10.154c0-0.234 0.225-0.423 0.5-0.423h14c0.275 0 0.5 0.189 0.5 0.423v10.154zM5 15h7v1h-7v-1z" />
        </G>
      </Svg>
    );
  }

