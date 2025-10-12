

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPixLogoBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M238.16,113.89l-96-96a20,20,0,0,0-28.22,0l-96,96.05a20,20,0,0,0,0,28.22l96.05,96a20,20,0,0,0,28.22,0l96-96a20,20,0,0,0,0-28.22ZM128,37.68,174.32,84H160a12,12,0,0,0-8.49,3.51L128,111,104.49,87.51A12,12,0,0,0,96,84H81.68ZM57.68,108H91l20,20L91,148H57.68l-20-20ZM128,218.32,81.68,172H96a12,12,0,0,0,8.49-3.51L128,145l23.51,23.52A12,12,0,0,0,160,172h14.32ZM198.32,148H165l-20-20,20-20h33.35l20,20Z" />
        </G>
      </Svg>
    );
  }

