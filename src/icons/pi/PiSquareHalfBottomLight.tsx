

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSquareHalfBottomLight = (props: IconProps) => {

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
          <Path  d="M200,42H56A14,14,0,0,0,42,56V200a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42ZM56,54H200a2,2,0,0,1,2,2v66H54V56A2,2,0,0,1,56,54Zm50,80v68H86V134Zm12,0h20v68H118Zm32,0h20v68H150ZM54,200V134H74v68H56A2,2,0,0,1,54,200Zm146,2H182V134h20v66A2,2,0,0,1,200,202Z" />
        </G>
      </Svg>
    );
  }

