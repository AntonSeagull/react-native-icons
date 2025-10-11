

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrStatusDisabled = (props: IconProps) => {

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
          <Path  fill="none" d="M2,3.99079514 C2,2.89130934 2.89821238,2 3.99079514,2 L20.0092049,2 C21.1086907,2 22,2.89821238 22,3.99079514 L22,20.0092049 C22,21.1086907 21.1017876,22 20.0092049,22 L3.99079514,22 C2.89130934,22 2,21.1017876 2,20.0092049 L2,3.99079514 Z M18,12 L6,12" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

