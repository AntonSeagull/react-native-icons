

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowBendDownRightLight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M228.24,156.24l-48,48a6,6,0,0,1-8.48-8.48L209.51,158H128A102.12,102.12,0,0,1,26,56a6,6,0,0,1,12,0,90.1,90.1,0,0,0,90,90h81.51l-37.75-37.76a6,6,0,0,1,8.48-8.48l48,48A6,6,0,0,1,228.24,156.24Z" />
        </G>
      </Svg>
    );
  }

