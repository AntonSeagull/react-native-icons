

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineDataThresholding = (props: IconProps) => {

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
          <Path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19h-1.73L19,17.27V19z M19,16 h-0.85l-3,3h-1.62l3-3h-2.12l-3,3H9.8l3-3h-2.12l-3,3H5.84l3-3H6.72L5,17.72V5h14V16z" />
        </G>
      </Svg>
    );
  }

