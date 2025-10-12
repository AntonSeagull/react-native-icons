

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrUserFemale = (props: IconProps) => {

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
          <Path  fill="none" d="M20,24 L20,19 C19.9999999,15 15.9403581,14 15,14 C18.9475,14 20,12 20,12 C20,12 16.942739,10.031 17,6 C16.942739,3 14.8497684,1 12,1 C9.01190309,1 6.91893246,3 7,6 C6.91893246,9.969 4,12 4,12 C4,12 4.91417116,14 9,14 C7.92131306,14 4,15 4,19 L4,24 M16,19 L16,24 M8,19 L8,24" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

