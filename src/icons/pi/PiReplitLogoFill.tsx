

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiReplitLogoFill = (props: IconProps) => {

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
          <Path  d="M72,160h72v56a16,16,0,0,1-16,16H72a16,16,0,0,1-16-16V176A16,16,0,0,1,72,160ZM128,24H72A16,16,0,0,0,56,40V80A16,16,0,0,0,72,96h72V40A16,16,0,0,0,128,24Zm88,72H144v64h72a16,16,0,0,0,16-16V112A16,16,0,0,0,216,96Z" />
        </G>
      </Svg>
    );
  }

