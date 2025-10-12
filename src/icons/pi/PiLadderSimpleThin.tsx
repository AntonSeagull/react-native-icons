

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiLadderSimpleThin = (props: IconProps) => {

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
          <Path  d="M192,28a4,4,0,0,0-4,4V68H68V32a4,4,0,0,0-8,0V224a4,4,0,0,0,8,0V188H188v36a4,4,0,0,0,8,0V32A4,4,0,0,0,192,28Zm-4,48v48H68V76ZM68,180V132H188v48Z" />
        </G>
      </Svg>
    );
  }

