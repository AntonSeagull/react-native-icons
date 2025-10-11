

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiInvoiceBold = (props: IconProps) => {

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
          <Path  d="M28,132a12,12,0,0,1,0-24H56a4,4,0,0,0,0-8H40a28,28,0,0,1-3.38-55.79A12,12,0,0,1,59.3,44H64a12,12,0,0,1,0,24H40a4,4,0,0,0,0,8H56a28,28,0,0,1,3.38,55.79A12,12,0,0,1,36.7,132ZM236,56V192a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V164a12,12,0,0,1,24,0v24H156V164H88a12,12,0,0,1,0-24h68V116H112a12,12,0,0,1,0-24H212V68H104a12,12,0,0,1,0-24H224A12,12,0,0,1,236,56Zm-56,84h32V116H180Zm32,48V164H180v24Z" />
        </G>
      </Svg>
    );
  }

