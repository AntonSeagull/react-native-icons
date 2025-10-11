

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiExport = (props: IconProps) => {

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
          <Path  d="M5.552,20.968a2.577,2.577,0,0,1-2.5-2.73c-.012-2.153,0-4.306,0-6.459a.5.5,0,0,1,1,0c0,2.2-.032,4.4,0,6.6.016,1.107.848,1.589,1.838,1.589H18.353A1.546,1.546,0,0,0,19.825,19a3.023,3.023,0,0,0,.1-1.061V11.779h0a.5.5,0,0,1,1,0c0,2.224.085,4.465,0,6.687a2.567,2.567,0,0,1-2.67,2.5Z" />
          <Path  d="M12.337,3.176a.455.455,0,0,0-.311-.138c-.015,0-.028,0-.043-.006s-.027,0-.041.006a.457.457,0,0,0-.312.138L7.961,6.845a.5.5,0,0,0,.707.707l2.816-2.815V15.479a.5.5,0,0,0,1,0V4.737L15.3,7.552a.5.5,0,0,0,.707-.707Z" />
        </G>
      </Svg>
    );
  }

