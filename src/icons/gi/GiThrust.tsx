

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiThrust = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M452.798 479.462L59.205 481.31s154.378-369.683 151.153-379.303l-46.12-.224 93.677-71.09 95.207 72.397-50.263.224z" />
        </G>
      </Svg>
    );
  }

