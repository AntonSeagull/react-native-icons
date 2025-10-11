

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdTypeSpecimen = (props: IconProps) => {

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
          <Path  d="M4,6H2v14c0,1.1,0.9,2,2,2h14v-2H4V6z" />
          <Path  d="M20,2H8C6.9,2,6,2.9,6,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M16.63,14.5l-0.8-2.3h-3.63 l-0.82,2.3H9.81l3.38-9h1.61l3.38,9H16.63z" />
        </G>
      </Svg>
    );
  }

