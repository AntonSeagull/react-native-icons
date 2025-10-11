

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowBendRightUpThin = (props: IconProps) => {

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
          <Path d="M202.83,82.83a4,4,0,0,1-5.66,0L156,41.66V128A100.11,100.11,0,0,1,56,228a4,4,0,0,1,0-8,92.1,92.1,0,0,0,92-92V41.66L106.83,82.83a4,4,0,0,1-5.66-5.66l48-48a4,4,0,0,1,5.66,0l48,48A4,4,0,0,1,202.83,82.83Z" />
        </G>
      </Svg>
    );
  }

