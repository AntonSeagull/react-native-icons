

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrChapterNext = (props: IconProps) => {

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
          <Path  fill="none" d="M1,3.5 L1,20 L10,14 L10,20 L21,12 L10,4 L10,10 L1,3.5 Z M22,2 L22,22 L22,2 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

