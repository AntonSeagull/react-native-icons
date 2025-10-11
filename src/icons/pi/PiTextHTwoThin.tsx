

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTextHTwoThin = (props: IconProps) => {

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
          <Path  d="M148,56V176a4,4,0,0,1-8,0V120H44v56a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0v56h96V56a4,4,0,0,1,8,0Zm92,148H200l38.36-51.15a28,28,0,1,0-48.77-26.18,4,4,0,1,0,7.54,2.66A20.36,20.36,0,0,1,200,124,20,20,0,0,1,232,148L188.8,205.6A4,4,0,0,0,192,212h48a4,4,0,0,0,0-8Z" />
        </G>
      </Svg>
    );
  }

