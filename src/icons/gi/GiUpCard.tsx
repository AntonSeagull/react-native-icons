

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiUpCard = (props: IconProps) => {

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
          <Path  d="M256 47L139.4 202.467l93.6-40.115V359h46V162.352l93.6 40.115L256 47zM144 256L32 480h448L368 256h-71v121h-82V256h-71z" />
        </G>
      </Svg>
    );
  }

