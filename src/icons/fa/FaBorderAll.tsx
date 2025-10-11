

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FaBorderAll = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 448 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 224, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-32 64v128H256V96zm-192 0v128H64V96zM64 416V288h128v128zm192 0V288h128v128z" />
        </G>
      </Svg>
    );
  }

