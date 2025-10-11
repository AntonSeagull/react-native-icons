

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrChapterNext = (props: IconProps) => {

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
          <Path d="M1,3.5 L1,20 L10,14 L10,20 L21,12 L10,4 L10,10 L1,3.5 Z M22,2 L22,22 L22,2 Z" fill="none" />
        </G>
      </Svg>
    );
  }

